export async function createProjectFolders(projectName: string) {
  return {
    rootFolderId: `drive_root_${projectName}`,
    folders: {
      contracts: "01_Contracts",
      correspondence: "02_Correspondence",
      registers: "03_Registers",
      drafts: "04_Drafts",
      claims: "05_Claims"
    }
  };
}

export async function uploadAttachment(fileName: string) {
  return { fileId: `drive_${fileName}` };
}
