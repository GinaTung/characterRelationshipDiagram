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
    allowShowMiniToolBar: true,
    defaultNodeBorderWidth: 0,
    allowSwitchLineShape: true,
    allowSwitchJunctionPoint: false,
    disableZoom: true,
    defaultLineShape: 1,
    defaultFocusRootNode: false,
    placeOtherGroup: true,
    defaultNodeBorderColor: '#000',
    defaultLineColor: '#00000080',
    defaultLineWidth: 2,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    layout: {
      layoutName: 'force',
      from: 'left',
      maxLayoutTimes: 5000,
      force_node_repulsion: 3,
      force_line_elastic: 3,
    },
    defaultJunctionPoint: 'border',
  };
  return {
    setNodeCoordinates,
    setNodeColors,
    graphOptions,
  };
});
