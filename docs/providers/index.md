---
outline: deep
---

# Providers

Drivebase currently supports the following providers:

- [Google Drive](/docs/providers/google-drive.md)
- [OneDrive](/docs/providers/onedrive.md)
- [Dropbox](/docs/providers/dropbox.md)

## Adding a new provider

To add a new provider, you need to create a new provider in the `shared/internal/src/providers/providers` directory. 

All the OAuth providers implement the `OAuthProvider` interface.
You can always refer to the existing providers to see how to implement a new one.

Here is the interface of the `OAuthProvider` class:

```typescript
export interface OAuthProvider {
  config: OAuthConfig;

  // Authentication
  getAuthUrl(state?: string): string;
  getAccessToken(code: string): Promise<AuthToken>;
  refreshAccessToken(refreshToken: string): Promise<AuthToken>;
  setCredentials(credentials: Record<string, string>): Promise<void>;
  getUserInfo(): Promise<UserInfo>;

  // Drivebase folder
  hasFolder(id: string): Promise<boolean>;
  createDrivebaseFolder(): Promise<string>;

  // File operations
  uploadFile(folderId: string, file: Express.Multer.File): Promise<string>;
  downloadFile(fileId: string): Promise<Readable>;
  getFileMetadata(fileId: string): Promise<any>;
  deleteFile(path: string): Promise<boolean>;
}
```

## Pull Request

When you are done implementing the new provider, please create a pull request and wait for it to be merged.


