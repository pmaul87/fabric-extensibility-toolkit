import { FabricPlatformClient } from "../FabricPlatformClient";
import { WorkloadClientAPI } from "@ms-fabric/workload-client";

/**
 * Phase 0: Scaffolding - Client for Fabric lineage extraction
 * TODO Phase 1: Implement extraction methods for each artifact type
 * 
 * This client extends FabricPlatformClient to provide lineage-specific functionality
 * for extracting metadata from Fabric artifacts (Reports, Notebooks, Lakehouses, etc.)
 */

export interface ArtifactMetadata {
  id: string;
  name: string;
  type: string;
  // TODO Phase 1: Add detailed metadata properties
}

export class FabricLineageClient extends FabricPlatformClient {
  constructor(workloadClient: WorkloadClientAPI) {
    super(workloadClient);
  }

  /**
   * TODO Phase 1: Extract Report metadata (visuals, pages, data sources)
   * Parse report definition JSON from item definition
   */
  async extractReportMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }

  /**
   * TODO Phase 1: Extract Notebook metadata (input/output data sources)
   * Parse .ipynb files from item definition parts
   */
  async extractNotebookMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }

  /**
   * TODO Phase 1: Extract Lakehouse metadata (tables and schemas)
   * Use schema discovery APIs
   */
  async extractLakehouseMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }

  /**
   * TODO Phase 1: Extract Data Warehouse metadata (tables and views)
   */
  async extractWarehouseMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }

  /**
   * TODO Phase 1: Extract Pipeline metadata (activities and data flows)
   * Parse pipeline JSON definition
   */
  async extractPipelineMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }

  /**
   * TODO Phase 1: Extract Dataflow metadata (sources and transformations)
   */
  async extractDataflowMetadata(workspaceId: string, itemId: string): Promise<ArtifactMetadata> {
    throw new Error("Phase 1: Not implemented yet");
  }
}
