function repositoryFactory(Model) {
  return {
    create: async (data) => {
      const newDocument = new Model(data);
      return await newDocument.save();
    },

    findAll: async () => {
      return await Model.find();
    },

    findById: async (id) => {
      return await Model.findOne({ companyId: id });
    },

    findByLastMonth: async (date) => {
      return await Model.find({ joinDate: { $gte: date } });
    }
  };
}

module.exports = repositoryFactory;