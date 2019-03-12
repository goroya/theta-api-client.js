import { ICommonReq, ICommonResDone } from './common';

export interface ICameraGetMetadataReq extends ICommonReq {
  name: 'camera._getMetadata';
  parameters: ICameraGetMetadataReqParam;
}
export interface ICameraGetMetadataReqParam {
  fileUrl: string;
}

export interface ICameraGetMetadataResDone extends ICommonResDone {
  name: 'camera._getMetadata';
  results: ICameraGetMetadataResDoneParam;
}
export interface ICameraGetMetadataResDoneParam {
  exif: {
    ExifVersion: string;
    ImageDescription: string;
    DateTime: string;
    ImageWidth: number;
    ImageLength: number;
    ColorSpace: number;
    Compression: number;
    Orientation: number;
  };
  xmp: {
    ProjectionType: string;
    UsePanoramaViewer: boolean;
    PoseHeadingDegrees: number;
    CroppedAreaImageWidthPixels: number;
    CroppedAreaImageHeightPixels: number;
    FullPanoWidthPixels: number;
    FullPanoHeightPixels: number;
    CroppedAreaLeftPixels: number;
    CroppedAreaTopPixels: number;
  };
}
