export type GenericNodeData = {
    id: string,
    type: string,
    modelid?: string,
    position: {
      x: number,
      y: number,
      z: number
    },
    rotation: {
      x: number,
      y: number,
      z: number
    },
    uvs?: {
      x: number,
      y: number,
      z: number,
      w: number
    },
    otherdata?: any[] 
  };