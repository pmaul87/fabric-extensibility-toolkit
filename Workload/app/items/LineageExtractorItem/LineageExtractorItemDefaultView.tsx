import React from "react";
import { useTranslation } from "react-i18next";
import { Text, Card } from "@fluentui/react-components";
import { WorkloadClientAPI } from "@ms-fabric/workload-client";
import { ItemEditorDefaultView } from "../../components/ItemEditor";
import { ItemWithDefinition } from "../../controller/ItemCRUDController";
import { LineageExtractorItemDefinition } from "./LineageExtractorItemDefinition";

/**
 * Phase 0: Scaffolding - Default view with placeholder content
 * TODO Phase 1: Implement configuration UI with workspace selector and extraction settings
 */

interface LineageExtractorItemDefaultViewProps {
  item?: ItemWithDefinition<LineageExtractorItemDefinition>;
  workloadClient: WorkloadClientAPI;
}

export function LineageExtractorItemDefaultView(props: LineageExtractorItemDefaultViewProps) {
  const { t } = useTranslation();

  // TODO Phase 1: Implement left panel with workspace selector (OneLakeView pattern)
  // TODO Phase 1: Implement center panel with configuration form

  return (
    <ItemEditorDefaultView
      center={{
        content: (
          <div className="lineage-extractor-default-view">
            <Card className="lineage-extractor-placeholder-card">
              <Text size={500} weight="semibold">
                {t("Lineage Extractor Configuration")}
              </Text>
              <Text>
                {t("Phase 0: Scaffolding complete. Configuration UI will be implemented in Phase 1.")}
              </Text>
              <Text>
                {t("Future features:")}
              </Text>
              <ul>
                <li>{t("Workspace selector (left panel)")}</li>
                <li>{t("Artifact type selection (Semantic Models, Reports, Notebooks, etc.)")}</li>
                <li>{t("Granularity settings (columns, measures, visuals, etc.)")}</li>
                <li>{t("Target lakehouse selection")}</li>
                <li>{t("Extraction status and progress")}</li>
              </ul>
            </Card>
          </div>
        ),
        ariaLabel: t("Lineage Extractor configuration workspace"),
      }}
    />
  );
}
