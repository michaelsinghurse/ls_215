// class_records.js

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;
const NUM_OF_EXAMS = 4;

function gradePercentToLetter(percent) {
  if (percent >= 93) {
    return "A";
  } else if (percent >= 85 && percent <= 92) {
    return "B";
  } else if (percent >= 77 && percent <= 84) {
    return "C";
  } else if (percent >= 69 && percent <= 76) {
    return "D";
  } else if (percent >= 60 && percent <= 68) {
    return "E";
  } else {
    return "F";
  }
}

function calculateGrade(scoreObj) {
  let examAvg = 
    scoreObj.exams.reduce((sum, val) => sum + val) / scoreObj.exams.length;
  let exerciseSum = scoreObj.exercises.reduce((accum, val) => accum + val);
  let percent = Math.round(
    examAvg * EXAM_WEIGHT + exerciseSum * EXERCISE_WEIGHT);
  
  return `${percent} (${gradePercentToLetter(percent)})`;
}

function calculateStudentGrades(scores) {
  return Object.values(scores)
    .map(values => calculateGrade(values["scores"]));
}

function extractExamScores(scores) {
  let exams = [];

  for (let index = 0; index < NUM_OF_EXAMS; index += 1) {
    let examScores = Object.values(scores)
      .map(value => value["scores"]["exams"][index]);

    exams.push(examScores);
  }

  return exams;
}

let calculateAverage = array => {
  let sum = array.reduce((accum, val) => accum + val);
  return Number((sum / array.length).toFixed(1));
};

function calculateStats(array) {
  return {
    "average": calculateAverage(array),
    "minimum": Math.min(...array),
    "maximum": Math.max(...array),
  };
}

function calculateExamResults(scores) {
  let examScores = extractExamScores(scores); 
  return examScores.map(exam => calculateStats(exam)); 
}

function generateClassRecordSummary(scores) {
  return {
    "studentGrades": calculateStudentGrades(scores),
    "exams": calculateExamResults(scores),
  };
}

let summary = generateClassRecordSummary(studentScores);
console.log(summary);
/*
returns:
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
