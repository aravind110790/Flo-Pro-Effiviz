// Implemented the suggestNextSymbolFlow based on the current node and its relationships to suggest the next symbol.

'use server';

/**
 * @fileOverview AI agent that suggests the next symbol for a flowchart.
 *
 * - suggestNextSymbol - A function that suggests the next symbol in a flowchart based on the current context.
 * - SuggestNextSymbolInput - The input type for the suggestNextSymbol function.
 * - SuggestNextSymbolOutput - The output type for the suggestNextSymbol function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestNextSymbolInputSchema = z.object({
  currentNodeType: z
    .string()
    .describe('The type of the current node in the flowchart.'),
  relationships: z
    .string()
    .describe(
      'A description of the relationships between the current node and other nodes in the flowchart.'
    ),
  existingNodes: z
    .string()
    .describe('A list of existing nodes in the flowchart and their types.'),
});

export type SuggestNextSymbolInput = z.infer<typeof SuggestNextSymbolInputSchema>;

const SuggestNextSymbolOutputSchema = z.object({
  suggestedSymbol: z.string().describe('The suggested next symbol to add to the flowchart.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the suggested symbol, explaining why it is appropriate.'),
});

export type SuggestNextSymbolOutput = z.infer<typeof SuggestNextSymbolOutputSchema>;

export async function suggestNextSymbol(
  input: SuggestNextSymbolInput
): Promise<SuggestNextSymbolOutput> {
  return suggestNextSymbolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestNextSymbolPrompt',
  input: {schema: SuggestNextSymbolInputSchema},
  output: {schema: SuggestNextSymbolOutputSchema},
  prompt: `You are an AI assistant that helps users create flowcharts. Based on the current node and its relationships, suggest the most appropriate next symbol to add to the chart. The tool uses the current node and the relationships to other nodes as context.

Current Node Type: {{{currentNodeType}}}
Relationships: {{{relationships}}}
Existing Nodes: {{{existingNodes}}}

Suggest the next symbol and explain your reasoning:
`,
});

const suggestNextSymbolFlow = ai.defineFlow(
  {
    name: 'suggestNextSymbolFlow',
    inputSchema: SuggestNextSymbolInputSchema,
    outputSchema: SuggestNextSymbolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
