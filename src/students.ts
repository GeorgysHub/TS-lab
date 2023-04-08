type Student = {
    surname: string;
    name: string;
    patronymic?: string;
  };
  
  type Group = {
    groupName: string;
    course: number;
    students: Student[];
  };
  
  type Educator = {
    surname: string;
    name: string;
    patronymic?: string;
    degree?: string;
    groups?: Group[];
  };
  
  function isMyStudent(s: Student, t: Educator): boolean {
    if (!t.groups) {
      return false;
    }
    for (let group of t.groups) {
      for (let studentInGroup of group.students) {
        if (studentInGroup === s) {
          return true;
        }
      }
    }
    return false;
  }
  
  function getName(o: Student | Educator | Group): string {
    if ('name' in o && 'surname' in o && o.patronymic !== undefined) {
      return o.name + ' ' + o.surname + ' ' + o.patronymic;
    }
    if ('name' in o && 'surname' in o) {
      return o.name + ' ' + o.surname;
    }
    if ('students' in o) {
      return o.groupName;
    }
    return '';
  }
  
  function studentCount(o: Educator | Group): number {
    if (!('students' in o)) {
      return 0;
    }
    let count = 0;
    for (let student of o.students) {
      count++;
    }
    return count;
  }
  
  function selectGroup(g1: Group, g2: Group, s: Student): void {
    let count1 = g1.students.length;
    let count2 = g2.students.length;
    if (count1 > count2) {
      g2.students.push(s);
    } else {
      g1.students.push(s);
    }
  }
  
  let student1: Student = {
    surname: 'Князев',
    name: 'Олег',
    patronymic: 'Никитьевич',
  };
  let student2: Student = {
    surname: 'Антонов',
    name: 'Кирилл',
    patronymic: 'Анатольевич',
  };
  let student3: Student = {
    surname: 'Лисичкин',
    name: 'Матвей',
  };
  let group1: Group = {
    groupName: 'ПИНФ',
    course: 3,
    students: [student1, student2],
  };
  let group2: Group = {
    groupName: 'ИФСТ',
    course: 2,
    students: [student3],
  };
  let educator1: Educator = {
    surname: 'Олежка',
    name: 'Тапок',
    degree: 'проф',
    groups: [group1],
  };
  let educator2: Educator = {
    surname: 'Грибоедова',
    name: 'Жанна',
    degree: 'проф',
    groups: [group1],
  };
  
  console.log(getName(student1));
  console.log(getName(student2));
  console.log(getName(student3));
  console.log(group1);
  console.log(isMyStudent(student1, educator1));
  console.log(isMyStudent(student2, educator2));
  selectGroup(group1, group2, student1);
  console.log(group1);
  console.log(group2);
  console.log(studentCount(educator1));
  console.log(studentCount(group1));