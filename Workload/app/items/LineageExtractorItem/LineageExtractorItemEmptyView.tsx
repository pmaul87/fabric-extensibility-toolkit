import React from "react";
import { useTranslation } from "react-i18next";
import { ItemEditorEmptyView } from "../../components/ItemEditor";

/**
 * Phase 0: Scaffolding - Empty view for first-time users
 * TODO Phase 1: Add specific setup tasks and configuration guidance
 */

interface LineageExtractorItemEmptyViewProps {
  onGetStarted: () => void;
}

export function LineageExtractorItemEmptyView(props: LineageExtractorItemEmptyViewProps) {
  const { t } = useTranslation();

  // TODO Phase 1: Add real setup tasks
  const setupTasks = [
    {
      id: "configure",
      label: t("LineageExtractorItemEditorEmpty_Task1_Title", "Configure extraction settings"),
      description: t("LineageExtractorItemEditorEmpty_Task1_Description", "Select workspaces and artifacts to extract lineage from"),
      onClick: props.onGetStarted,
    },
    {
      id: "lakehouse",
      label: t("LineageExtractorItemEditorEmpty_Task2_Title", "Select target lakehouse"),
      description: t("LineageExtractorItemEditorEmpty_Task2_Description", "Choose where to store extracted lineage data"),
      onClick: props.onGetStarted,
    },
    {
      id: "run",
      label: t("LineageExtractorItemEditorEmpty_Task3_Title", "Run first extraction"),
      description: t("LineageExtractorItemEditorEmpty_Task3_Description", "Extract lineage metadata from your Fabric workspace"),
      onClick: props.onGetStarted,
    },
  ];

  return (
    <ItemEditorEmptyView
      title={t("Welcome to Lineage Extractor")}
      description={t(
        "Extract and store lineage metadata from Fabric artifacts including Semantic Models, Reports, Notebooks, and more."
      )}
      imageSrc="/assets/items/LineageExtractorItem/EditorEmpty.svg"
      tasks={setupTasks}
    />
  );
}
