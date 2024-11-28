export type GenerationResponse = {
  artifacts: Array<{
    base64: string;
    seed: number;
    finishReason: string;
  }>;
};
