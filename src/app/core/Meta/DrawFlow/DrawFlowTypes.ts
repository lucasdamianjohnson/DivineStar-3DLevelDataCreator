
export type drawFlowExportData = {
    drawflow: {
      Home: {
        data: Record<string, node>;
      };
    };
  };
 export  type node = {
    class: string;
    data: any;
    html: string;
    id: number;
    inputs: Record<
      string,
      {
        connections: {
          input: string;
          node: string;
        }[];
      }
    >;
    name: string;
    outputs: Record<
      string,
      {
        connections: {
          input: string;
          node: string;
        }[];
      }
    >;
    pos_x: number;
    pos_y: number;
    typenode: boolean;
  };