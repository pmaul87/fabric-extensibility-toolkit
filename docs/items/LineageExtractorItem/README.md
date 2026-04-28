# LineageExtractor Item

Phase 0: Scaffolding complete

## Overview

The LineageExtractor item enables users to extract and store lineage metadata from Fabric artifacts at a granular level. This includes Semantic Models, Reports, Notebooks, Lakehouses, Data Warehouses, Pipelines, and Dataflows.

## Purpose

- **Extract**: Gather granular metadata from Fabric workspaces (columns, measures, visuals, tables, etc.)
- **Store**: Save lineage data in OneLake lakehouse for analysis
- **Trace**: Build lineage graphs showing dependencies between artifacts

## Key Features (Phase 1)

- Configuration UI for workspace and artifact selection
- Semantic link integration for Semantic Model extraction
- Spark Livy integration for programmatic notebook execution
- OneLake storage with organized folder structure
- Progress tracking and error handling

## Architecture

### Item Structure (Phase 0 - Scaffolded)
- `LineageExtractorItemDefinition.ts` - Item state interface
- `LineageExtractorItemEditor.tsx` - Main editor component
- `LineageExtractorItemDefaultView.tsx` - Configuration view
- `LineageExtractorItemEmptyView.tsx` - First-time user experience
- `LineageExtractorItemRibbon.tsx` - Toolbar with actions

### Clients (Phase 0 - Scaffolded)
- `FabricLineageClient.ts` - Extraction logic for non-semantic artifacts
- `SemanticLinkClient.ts` - Semantic link integration wrapper
- `OneLakeLineageStorage.ts` - Lakehouse storage management

### Services (Phase 0 - Scaffolded)
- `ExtractionOrchestrator.ts` - Extraction workflow orchestration
- `LineageGraphBuilder.ts` - Graph building from extracted metadata

## Usage (Phase 1)

### Configuration
1. Create LineageExtractor item in workspace
2. Select target workspaces to extract from
3. Choose artifact types (Semantic Models, Reports, etc.)
4. Select target lakehouse for storage
5. Configure granularity settings

### Extraction
1. Click "Extract Lineage" ribbon action
2. Monitor progress in UI
3. View extraction logs
4. Check lakehouse for results

### Storage Structure
```
Files/
  lineage/
    raw/              # Raw extraction data per artifact
      semantic_models/
      reports/
      notebooks/
      ...
    processed/        # Processed lineage graphs
    metadata/         # Extraction logs and metadata
```

## Implementation Phases

### Phase 0: Scaffolding (Current) ✅
- Project structure established
- Placeholder files created
- Documentation framework in place

### Phase 1: Core Extraction (Next)
- Implement FabricLineageClient methods
- Add semantic link notebook integration
- Build extraction orchestration
- Implement OneLake storage
- Add configuration UI

### Phase 2: Backend & Visualization
- Create backend service for graph processing
- Implement LineageViewer item
- Add graph rendering

### Phase 3: Kanban Board
- Implement requirements tracking board

## Technical Details

### Dependencies
- `@ms-fabric/workload-client` - Fabric platform integration
- Fluent UI v9 - UI components
- semantic-link and semantic-link-labs (Python notebooks)

### Authentication
- User token delegation for workspace access
- OAuth scopes: ITEM_READ, WORKSPACE_READ

### Data Format
- JSON for all lineage data
- Timestamp-based snapshots for versioning

## Development

See [Architecture.md](Architecture.md) for detailed architecture decisions.
See [SemanticLink.md](SemanticLink.md) for semantic link integration guide.
See [DataSchema.md](DataSchema.md) for lineage data schema documentation.

## TODO Phase 1

- [ ] Implement configuration UI (workspace selector, artifact selection)
- [ ] Add FabricLineageClient extraction methods
- [ ] Implement SemanticLinkClient with Spark Livy integration
- [ ] Build OneLakeLineageStorage save/load logic
- [ ] Create ExtractionOrchestrator workflow
- [ ] Add progress tracking and error handling
- [ ] Implement save/settings handlers
- [ ] Add extraction status UI
- [ ] Create test scenarios and documentation
