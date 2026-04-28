import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageProps, ContextProps } from "../../App";
import { ItemWithDefinition, getWorkloadItem } from "../../controller/ItemCRUDController";
import { ItemEditor } from "../../components/ItemEditor";
import { LineageExtractorItemDefinition } from "./LineageExtractorItemDefinition";
import { LineageExtractorItemEmptyView } from "./LineageExtractorItemEmptyView";
import { LineageExtractorItemDefaultView } from "./LineageExtractorItemDefaultView";
import { LineageExtractorItemRibbon } from "./LineageExtractorItemRibbon";
import "./LineageExtractorItem.scss";

/**
 * Phase 0: Scaffolding - Basic editor structure
 * TODO Phase 1: Implement full editor logic with state management
 */

export const EDITOR_VIEW_TYPES = {
  EMPTY: 'empty',
  DEFAULT: 'default',
} as const;

export function LineageExtractorItemEditor(props: PageProps) {
  const { workloadClient } = props;
  const pageContext = useParams<ContextProps>();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState<ItemWithDefinition<LineageExtractorItemDefinition>>();
  const [viewSetter, setViewSetter] = useState<((view: string) => void) | null>(null);

  // TODO Phase 1: Implement full data loading and state management
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        if (pageContext.itemObjectId) {
          const loadedItem = await getWorkloadItem<LineageExtractorItemDefinition>(
            workloadClient,
            pageContext.itemObjectId
          );
          setItem(loadedItem);
        }
      } catch (error) {
        console.error("Failed to load LineageExtractor item:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [pageContext.itemObjectId, workloadClient]);

  // TODO Phase 1: Implement save, settings, and extraction handlers
  const handleSave = async () => {
    console.log("TODO Phase 1: Implement save logic");
  };

  const handleOpenSettings = async () => {
    console.log("TODO Phase 1: Implement settings logic");
  };

  const handleStartExtraction = () => {
    console.log("TODO Phase 1: Implement extraction logic");
  };

  // Static view definitions
  const views = [
    {
      name: EDITOR_VIEW_TYPES.EMPTY,
      component: (
        <LineageExtractorItemEmptyView
          onGetStarted={() => {
            if (viewSetter) {
              viewSetter(EDITOR_VIEW_TYPES.DEFAULT);
            }
          }}
        />
      )
    },
    {
      name: EDITOR_VIEW_TYPES.DEFAULT,
      component: (
        <LineageExtractorItemDefaultView
          workloadClient={workloadClient}
          item={item}
        />
      )
    }
  ];

  // Effect to set the correct view after loading completes
  useEffect(() => {
    if (!isLoading && item && viewSetter) {
      const correctView = !item?.definition?.extractionConfig
        ? EDITOR_VIEW_TYPES.EMPTY
        : EDITOR_VIEW_TYPES.DEFAULT;
      viewSetter(correctView);
    }
  }, [isLoading, item, viewSetter]);

  return (
    <ItemEditor
      isLoading={isLoading}
      loadingMessage={t("LineageExtractorItemEditor_Loading", "Loading...")}
      ribbon={(context) => (
        <LineageExtractorItemRibbon
          {...props}
          viewContext={context}
          isSaveButtonEnabled={true}
          isExtractButtonEnabled={false}
          saveItemCallback={handleSave}
          openSettingsCallback={handleOpenSettings}
          startExtractionCallback={handleStartExtraction}
        />
      )}
      views={views}
      viewSetter={(setCurrentView) => {
        if (!viewSetter) {
          setViewSetter(() => setCurrentView);
        }
      }}
    />
  );
}
