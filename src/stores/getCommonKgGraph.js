import { defineStore } from 'pinia';
import { graphColor, graphPosition } from '@/constants/graphStyle';

export const useCommonKgGraphStore = defineStore('graphKgStore', () => {
  const setNodeCoordinates = (nodes) => {
    const coordinates = graphPosition;

    nodes.forEach((node) => {
      if (coordinates[node.id]) {
        Object.assign(node, {
          x: coordinates[node.id].x,
          y: coordinates[node.id].y,
        });
      }
    });
  };

  const setNodeColors = (nodes) => {
    const colors = graphColor;

    nodes.forEach((node) => {
      if (node.labelStr && colors[node.labelStr]) {
        Object.assign(node, { color: colors[node.labelStr] });
      }
    });
  };

  const graphOptions = {
    debug: false,
    allowShowMiniToolBar: false,
    defaultNodeBorderWidth: 0,
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: false,
    defaultLineShape: 1,
    // defaultLineColor: '#000000',
    defaultLineWidth: 2,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    defaultFocusRootNode: true,
    layout: {
      layoutName: 'force',
      from: 'left',
      maxLayoutTimes: 1000,
      force_node_repulsion: 3,
      force_line_elastic: 1,
    },
    defaultJunctionPoint: 'border',
  };
  return {
    setNodeCoordinates,
    setNodeColors,
    graphOptions,
  };
});
