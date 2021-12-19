import Teacher, { promote } from './teacher_class_for_module.mjs';
// first is default import and the second one is named import

// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("Saleh", "FSc");
teacher.teach();