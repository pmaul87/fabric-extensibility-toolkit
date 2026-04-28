# Fabric Lineage Manager - Notebooks

Phase 0: Scaffolding - Notebook development structure

## Overview

This folder contains Jupyter notebooks for extracting lineage metadata from Fabric artifacts using **semantic link** and **semantic link labs** (Microsoft official libraries).

## Prerequisites

- Fabric workspace with required permissions
- Lakehouse for storing extraction results
- semantic-link and semantic-link-labs packages installed

## Notebook Structure

### Setup
- `00_setup.ipynb` - Install and configure semantic link packages

### Extraction Notebooks
- `extraction/01_extract_semantic_models.ipynb` - Extract Semantic Model metadata using semantic link
- `extraction/02_extract_reports.ipynb` - Extract Report metadata (visuals, pages, data sources)
- `extraction/03_extract_notebooks.ipynb` - Extract Notebook metadata (input/output sources)
- `extraction/04_extract_lakehouses.ipynb` - Extract Lakehouse schemas and tables
- `extraction/05_extract_warehouses.ipynb` - Extract Warehouse tables and views
- `extraction/06_extract_pipelines.ipynb` - Extract Pipeline activities and data flows
- `extraction/07_extract_dataflows.ipynb` - Extract Dataflow sources and transformations

### Processing Notebooks
- `processing/build_lineage_graph.ipynb` - Build lineage graph from extracted metadata

## Usage

### Phase 0: Scaffolding
Notebooks are placeholder files with basic structure.

### Phase 1: Implementation
1. Upload notebooks to Fabric workspace
2. Attach to lakehouse for result storage
3. Run setup notebook to install dependencies
4. Run extraction notebooks for each artifact type
5. Results saved to: `Files/lineage/raw/{artifact_type}/{artifact_id}.json`

## Semantic Link Integration

### Installation (Phase 1)
```python
%pip install semantic-link semantic-link-labs
```

### Key Functions (Phase 1)
- `list_functions()` - List all measures/calculated columns
- `list_measures()` - Get all measures
- `list_columns()` - Get all columns
- `list_relationships()` - Get relationships between tables
- `list_tables()` - Get table metadata

### Reference
- semantic-link: https://pypi.org/project/semantic-link/
- semantic-link-labs: https://pypi.org/project/semantic-link-labs/

## Development Workflow

### Phase 0 (Current)
- Notebooks are scaffolded with basic structure
- Ready for Phase 1 implementation

### Phase 1 (Next)
1. Develop notebooks locally in VS Code
2. Test with sample Fabric workspaces
3. Upload to Fabric workspace
4. Trigger execution via Spark Livy API from custom item
5. Monitor progress and retrieve results

## TODO Phase 1
- [ ] Implement semantic link setup in 00_setup.ipynb
- [ ] Add Semantic Model extraction using semantic-link-labs
- [ ] Add Report definition parsing
- [ ] Add Notebook .ipynb parsing
- [ ] Add Lakehouse schema discovery
- [ ] Add Warehouse metadata extraction
- [ ] Add Pipeline JSON parsing
- [ ] Add Dataflow extraction
- [ ] Implement lineage graph builder
