export interface DataType {
    SchemaVersion: number;
    ArtifactName: string;
    ArtifactType: string;
    Metadata: Metadata;
    Results?: (ResultsEntity)[] | null;
  }
  export interface Metadata {
    OS: OS;
    ImageID: string;
    DiffIDs?: (string)[] | null;
    RepoTags?: (string)[] | null;
    RepoDigests?: (string)[] | null;
    ImageConfig: ImageConfig;
  }
  export interface OS {
    Family: string;
    Name: string;
  }
  export interface ImageConfig {
    architecture: string;
    created: string;
    history?: (HistoryEntity)[] | null;
    os: string;
    rootfs: Rootfs;
    config: Config;
  }
  export interface HistoryEntity {
    created: string;
    created_by: string;
    empty_layer?: boolean | null;
    comment?: string | null;
  }
  export interface Rootfs {
    type: string;
    diff_ids?: (string)[] | null;
  }
  export interface Config {
    Cmd?: (string)[] | null;
    Env?: (string)[] | null;
    WorkingDir: string;
    ArgsEscaped: boolean;
  }
  export interface ResultsEntity {
    Target: string;
    Class: string;
    Type?: string | null;
    Secrets?: (SecretsEntity)[] | null;
  }
  export interface SecretsEntity {
    RuleID: string;
    Category: string;
    Severity: string;
    Title: string;
    StartLine: number;
    EndLine: number;
    Code: Code;
    Match: string;
    Layer: Layer;
  }
  export interface Code {
    Lines?: (LinesEntity)[] | null;
  }
  export interface LinesEntity {
    Number: number;
    Content: string;
    IsCause: boolean;
    Annotation: string;
    Truncated: boolean;
    Highlighted: string;
    FirstCause: boolean;
    LastCause: boolean;
  }
  export interface Layer {
    DiffID: string;
    CreatedBy: string;
  }
  