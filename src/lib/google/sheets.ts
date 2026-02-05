const registerColumns = {
  rfi: ["Ref", "Subject", "From", "To", "Date Received", "Date Due", "Status", "Link"],
  variation: ["Ref", "Title", "Cause", "Date Identified", "Notice Due", "Est Cost", "Status", "Link"],
  eot: ["Ref", "Cause", "Date Delay Started", "Notice Due", "Days Claimed", "Status", "Link"],
  claim: ["Claim No", "Period", "Submitted Date", "Amount", "Status", "Link"],
  invoice: ["Invoice No", "Supplier", "Date", "Amount", "Due Date", "Status", "Link"],
  correspondence: ["Date", "From", "Subject", "Type", "Project", "Link", "Status"]
};

export async function createRegisterSheets(projectName: string) {
  return {
    sheetId: `sheet_${projectName}`,
    tabs: registerColumns
  };
}

export async function appendRegisterRow(register: string, values: string[]) {
  return { register, rowId: `row_${Date.now()}`, values };
}
