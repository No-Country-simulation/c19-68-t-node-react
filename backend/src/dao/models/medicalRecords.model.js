import mongoose from "mongoose";

const medicalRecordsSchema = new mongoose.Schema(
  {
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctors",
      required: true,
    },
    occupation: {
      type: String,
      // Optional field
    },
    reasonForConsultation: {
      type: String,
      // Optional field
    },
    pathologiesHistory: {
      type: String,
      enum: [
        "Cardiovascular",
        "Surgical",
        "Renal",
        "Pulmonary",
        "Transfusion",
        "Digestive",
        "Immunodeficiencies",
        "Allergic",
      ],
    },
    medicines: {
      type: String,
      // Optional field
    },
    pathologiesHistoryNonPathological: {
      smoking: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
      },
      alcoholConsumption: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
      },
      psychoactiveSubstances: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
      },
      other: {
        type: String,
        // Optional field
      },
    },
    // Antecedentes familiares
    familyHistory: {
      diseases: {
        type: [String],
        // Optional field
      },
      siblings: {
        type: String,
        enum: ["Yes", "No"],
        // Optional field
      },
      siblingsCount: {
        type: Number,
        // Optional field
      },
      diseasesSuffered: {
        type: [String],
        // Optional field
      },
      livesWithOthers: {
        type: String,
        enum: ["Yes", "No"],
        // Optional field
      },
      // Antecedentes gineco-obstétricos
      gynecologicalObstetricHistory: {
        menarche: {
          type: Date,
          // Optional field
        },
        rhythm: {
          type: String,
          // Optional field
        },
        lastMenstrualPeriod: {
          type: Date,
          // Optional field
        },
        usesContraceptives: {
          type: String,
          enum: ["Yes", "No"],
          // Optional field
        },
        contraceptivesUsed: {
          type: [String],
          // Optional field
        },
        // Enfermedad actual del paciente
        currentIllness: {
          type: String,
          // Optional field
        },
        // Exploración física
      },
    },

    vitalSigns: {
      bloodPressureRightArm: {
        type: String,
        // Optional field
      },
      bloodPressureLeftArm: {
        type: String,
        // Optional field
      },
      heartRate: {
        type: String,
        // Optional field
      },
      respiratoryRate: {
        type: String,
        // Optional field
      },
      temperature: {
        type: String,
        // Optional field
      },
    },
    weight: {
      type: String,
      // Optional field
    },
    height: {
      type: String,
      // Optional field
    },
    bmi: {
      type: String,
      // Optional field
    },

    headAndNeck: {
      type: String,
      // Optional field
    },
    thorax: {
      type: String,
      // Optional field
    },
    abdomen: {
      type: String,
      // Optional field
    },
    extremities: {
      type: String,
      // Optional field
    },
    neurologicalAndMentalState: {
      type: String,
      // Optional field
    },
  },

  {
    timestamps: true,
  }
);

const MedicalRecords = mongoose.model("MedicalRecords", medicalRecordsSchema);

export default MedicalRecords;
