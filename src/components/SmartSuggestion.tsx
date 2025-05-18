'use client';

import type React from 'react';
import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2 } from 'lucide-react';
import { suggestNextSymbol, type SuggestNextSymbolInput, type SuggestNextSymbolOutput } from '@/ai/flows/suggest-next-symbol';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const SmartSuggestion: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const [currentNodeType, setCurrentNodeType] = useState('');
  const [relationships, setRelationships] = useState('');
  const [existingNodes, setExistingNodes] = useState('');
  const [suggestion, setSuggestion] = useState<SuggestNextSymbolOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuggestion(null);

    if (!currentNodeType.trim()) {
      setError("Current Node Type is required.");
      return;
    }

    const input: SuggestNextSymbolInput = {
      currentNodeType,
      relationships,
      existingNodes,
    };

    startTransition(async () => {
      try {
        const result = await suggestNextSymbol(input);
        setSuggestion(result);
        toast({
          title: "Suggestion Ready!",
          description: "A new symbol suggestion has been generated.",
        });
      } catch (err) {
        console.error("Error fetching suggestion:", err);
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
        setError(`Failed to get suggestion: ${errorMessage}`);
        toast({
          title: "Error",
          description: `Could not fetch suggestion. ${errorMessage}`,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Wand2 className="mr-2 h-5 w-5 text-primary" />
          Smart Suggestion
        </CardTitle>
        <CardDescription>Get AI-powered suggestions for your next flowchart symbol.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="currentNodeType">Current Node Type</Label>
            <Textarea
              id="currentNodeType"
              value={currentNodeType}
              onChange={(e) => setCurrentNodeType(e.target.value)}
              placeholder="e.g., Decision, Process"
              rows={1}
              required
            />
          </div>
          <div>
            <Label htmlFor="relationships">Relationships</Label>
            <Textarea
              id="relationships"
              value={relationships}
              onChange={(e) => setRelationships(e.target.value)}
              placeholder="e.g., 'If yes, connects to X; if no, connects to Y'"
              rows={2}
            />
          </div>
          <div>
            <Label htmlFor="existingNodes">Existing Nodes (Optional)</Label>
            <Textarea
              id="existingNodes"
              value={existingNodes}
              onChange={(e) => setExistingNodes(e.target.value)}
              placeholder="e.g., Start (Terminator), Check Stock (Process)"
              rows={2}
            />
          </div>
          <Button type="submit" disabled={isPending} className="w-full bg-primary hover:bg-primary/90">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Suggest Next Symbol
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        {error && (
          <Alert variant="destructive" className="w-full">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {suggestion && (
          <Alert variant="default" className="w-full">
             <Wand2 className="h-4 w-4" />
            <AlertTitle>Suggestion:</AlertTitle>
            <AlertDescription>
              <p className="font-semibold text-lg text-accent">{suggestion.suggestedSymbol}</p>
              <p className="mt-1 text-sm text-muted-foreground">{suggestion.reasoning}</p>
            </AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
};

export default SmartSuggestion;
