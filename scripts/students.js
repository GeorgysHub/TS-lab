function isMyStudent(s, t) {
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
function getName(o) {
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
function studentCount(o) {
    if (!('students' in o)) {
        return 0;
    }
    let count = 0;
    for (let student of o.students) {
        count++;
    }
    return count;
}
function selectGroup(g1, g2, s) {
    let count1 = g1.students.length;
    let count2 = g2.students.length;
    if (count1 > count2) {
        g2.students.push(s);
    }
    else {
        g1.students.push(s);
    }
}
let student1 = {
    surname: 'Князев',
    name: 'Олег',
    patronymic: 'Никитьевич',
};
let student2 = {
    surname: 'Антонов',
    name: 'Кирилл',
    patronymic: 'Анатольевич',
};
let student3 = {
    surname: 'Лисичкин',
    name: 'Матвей',
};
let group1 = {
    groupName: 'ПИНФ',
    course: 3,
    students: [student1, student2],
};
let group2 = {
    groupName: 'ИФСТ',
    course: 2,
    students: [student3],
};
let educator1 = {
    surname: 'Олежка',
    name: 'Тапок',
    degree: 'проф',
    groups: [group1],
};
let educator2 = {
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