import React from "react";
import { useTranslation } from "react-i18next";
import { PageProps } from '../../App';
import {
  Ribbon,
  RibbonAction,
  createSaveAction,
  createSettingsAction,
  ViewContext
} from "../../components/ItemEditor";
import { Play24Regular } from "@fluentui/react-icons";

/**
 * Phase 0: Scaffolding - Basic ribbon with standard actions
 * TODO Phase 1: Add extraction-specific actions
 */

interface LineageExtractorItemRibbonProps extends PageProps {
  viewContext: ViewContext;
  isSaveButtonEnabled: boolean;
  isExtractButtonEnabled: boolean;
  saveItemCallback: () => Promise<void>;
  openSettingsCallback: () => Promise<void>;
  startExtractionCallback: () => void;
}

export function LineageExtractorItemRibbon(props: LineageExtractorItemRibbonProps) {
  const { t } = useTranslation();

  // Standard Home tab actions using factories
  const saveAction = createSaveAction(
      props.saveItemCallback,
      !props.isSaveButtonEnabled
  );

  const settingsAction = createSettingsAction(
      props.openSettingsCallback
  );

  // Custom extraction action
  const extractAction: RibbonAction = {
    key: "extract",
    label: t("LineageExtractorItemEditor_Ribbon_Extract_Label", "Extract Lineage"),
    icon: Play24Regular,
    onClick: props.startExtractionCallback,
    disabled: !props.isExtractButtonEnabled,
    tooltip: t("LineageExtractorItemEditor_Ribbon_Extract_Tooltip", "Start lineage extraction from configured workspaces"),
  };

  const homeToolbarActions: RibbonAction[] = [
    saveAction,
    settingsAction,
    extractAction
  ];

  return (
    <Ribbon
      homeToolbarActions={homeToolbarActions}
      viewContext={props.viewContext}
    />
  );
}
