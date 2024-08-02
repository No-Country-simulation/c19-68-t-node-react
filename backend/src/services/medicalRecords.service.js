import { medicalManager, patientManager } from "../dao/index.dao.js";
import CustomError from "../middlewares/error.middleware.js";

class MedicalRecordsService {
  async regisMedRec(bodyData) {
    try {
      const existingPatient = await patientManager.findOne({
        _id: bodyData.patient_id,
      });

      const newMedicalRecord = await medicalManager.create({
        patient_id: existingPatient._id,
        doctor_id: bodyData.doctort_id,
        occupation: bodyData.occupation,
        reasonForConsultation: bodyData.reasonForConsultation,
        pathologiesHistory: bodyData.pathologiesHistory,
        medicines: bodyData.medicines,
        pathologiesHistoryNonPathological: {
          smoking: bodyData.smoking,
          alcoholConsumption: bodyData.alcoholConsumption,
          psychoactiveSubstances: bodyData.psychoactiveSubstances,
          other: bodyData.other,
        },
        familyHistory: {
          diseases: bodyData.diseases,
          siblings: bodyData.siblings,
          siblingsCount: bodyData.siblingsCount,
          diseasesSuffered: bodyData.diseasesSuffered,
          livesWithOthers: bodyData.livesWithOthers,
        },
        gynecologicalObstetricHistory: {
          menarche: bodyData.menarche,
          rhythm: bodyData.rhythm,
          lastMenstrualPeriod: bodyData.lastMenstrualPeriod,
          usesContraceptives: bodyData.usesContraceptives,
          contraceptivesUsed: bodyData.contraceptivesUsed,
          currentIllness: bodyData.currentIllness,
        },
        vitalSigns: {
          bloodPressureRightArm: bodyData.bloodPressureRightArm,
          bloodPressureLeftArm: bodyData.bloodPressureLeftArm,
          heartRate: bodyData.heartRate,
          respiratoryRate: bodyData.respiratoryRate,
          temperature: bodyData.temperature,
        },
        weight: bodyData.weight,
        height: bodyData.height,
        bmi: bodyData.bmi,
        headAndNeck: bodyData.headAndNeck,
        thorax: bodyData.thorax,
        abdomen: bodyData.abdomen,
        extremities: bodyData.extremities,
        neurologicalAndMentalState: bodyData.neurologicalAndMentalState,
      });

      return newMedicalRecord;

    } catch (error) {}
  }
  async getHistoryById(id) {
    try {
      const medicalHistory = await medicalManager.findOne({
        patient_id: id,
      });
      return medicalHistory;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }
}

export default new MedicalRecordsService();
