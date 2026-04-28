/**
 * Interface representing the definition of a LineageExtractor item.
 * This information is stored in Fabric as Item definition.
 * It will be returned once the item definition is loaded.
 * 
 * Phase 0: Scaffolding - Placeholder interface
 * TODO Phase 1: Add configuration properties for extraction settings
 */
export interface LineageExtractorItemDefinition {
  // TODO Phase 1: Add configuration properties
  // - Target workspace IDs
  // - Target lakehouse for storage
  // - Artifact types to extract
  // - Granularity settings
  // - Last extraction timestamp
  extractionConfig?: {
    targetWorkspaces?: string[];
    targetLakehouseId?: string;
    artifactTypes?: string[];
    lastExtraction?: string;
  };
}
