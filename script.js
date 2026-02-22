// script.js for MAYA Drug Application

class MayaDrugApplication {
    constructor() {
        this.patients = [];
    }

    addPatient(name, age, condition) {
        const patient = { name, age, condition }; 
        this.patients.push(patient);
        console.log(`Added patient: ${name}, Age: ${age}, Condition: ${condition}`);
    }

    displayPatients() {
        console.log("List of Patients:");
        this.patients.forEach(patient => {
            console.log(`Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}`);
        });
    }

    checkEligibility(patient) {
        if (patient.age < 18) {
            return `${patient.name} is not eligible for the MAYA drug application.`;
        }
        return `${patient.name} is eligible for the MAYA drug application.`;
    }
}

// Example usage
const mayaApp = new MayaDrugApplication();
mayaApp.addPatient('John Doe', 30, 'Cancer');
mayaApp.addPatient('Jane Smith', 17, 'Diabetes');
mayaApp.displayPatients();
console.log(mayaApp.checkEligibility(mayaApp.patients[0])); // Check eligibility for first patient
console.log(mayaApp.checkEligibility(mayaApp.patients[1])); // Check eligibility for second patient
