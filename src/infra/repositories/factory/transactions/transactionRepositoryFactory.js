function repositoryFactory(Model) {
  return {
    create: async (data) => {
      const newDocument = new Model(data);
      return await newDocument.save();
    },

    findAllByLastMonth: async (startDate, endDate) => {
      return await Model.aggregate([
        { $match: { operationDate: { $gte: startDate, $lt: endDate } } },
        { 
          $lookup: { 
            from: "companies", 
            localField: "companyId", 
            foreignField: "companyId",
            as: "company" 
          } 
        },
        { $unwind: "$company" }
      ]);
    },

    findLatestId: async (idField = "transferId") => {
      return await Model.findOne().sort({ [idField]: -1 });
    }
  };
}

module.exports = repositoryFactory;