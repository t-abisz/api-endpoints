export interface Implementation {
  data: [
    {
      path: string,
      method: string,
      uid: null,
      externalOperationId: string,
      referenceOperationVersion: string,
      implementations: [
        {
          systemModule: string,
          systemName: string,
          deploymentStatusOfOperationDTO: {}
       }
      ]
    }
  ];
}
