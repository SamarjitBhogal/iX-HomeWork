import {
    collection, addDoc, 
    query, getDocs,
    doc, updateDoc,
    deleteDoc
} from 'firebase/firestore';

import {db} from '../firebase/firebase';
import { Task } from '../models/Task';

class TaskService {
    constructor() {
        this.collection = 'tasks';
    }

    // CREATE
    async createTask(task) {
        const collectionRef = collection(db, this.collection);
        
        const docRef = await addDoc(collectionRef, {
            name: task.name,
            complete: task.complete
        });

        task.id = docRef.id;
        //console.log(task.id);
        return task;
    } 

    // READ
    async readTasks() {
        const q = query(collection(db, this.collection));

        const qSnapshot = await getDocs(q);
        const tasks = [];

        qSnapshot.forEach((doc) => {
            const data = doc.data();

            tasks.push(new Task(
                // use doc because there is nbo field in the doc with id
                doc.id,
                data.name,
                data.complete
            ));
        });
        return tasks;
    }

    // UPDATE
    async updateTask(task) {
        const docRef = doc(db, this.collection, task.id);
        await updateDoc(docRef, {
            name: task.name,
            complete: task.complete
        });

        return task;
    }

    // DELETE
    async deleteTask(taskId) {
        const docRef = doc(db, this.collection, taskId);
        await deleteDoc(docRef);
    }
}

const service = new TaskService();
export default service;