const resourceTypes = ['resources', 'workers', 'boss'];
const factory = new Factory();
const buildingSite = new BuildingSite(factory);

resourceTypes.forEach(resourceType => {
    document.getElementById(`generate-${resourceType}`).addEventListener("click", () => {
        buildingSite.callSupply(resourceType);
    });
});
