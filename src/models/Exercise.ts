import db from "../db/connect.js";

type ExerciseParams = {
    exercise_id: number,
    name: string, 
    primary_muscle: string, 
    secondary_muscles: string[], 
    description: string, 
    graphic: string
}

class Exercise {
    exercise_id: number
    name: string
    primary_muscle: string
    secondary_muscles: string[]
    description: string
    graphic: string

    constructor({ exercise_id, name, primary_muscle, secondary_muscles, description, graphic }: ExerciseParams) {
        this.exercise_id = exercise_id;
        this.name = name;
        this.primary_muscle = primary_muscle;
        this.secondary_muscles = secondary_muscles;
        this.description = description;
        this.graphic = graphic
    }

    static async getAll() {
    const response = await db.query("SELECT * FROM exercises;");
    if (response.rows.length === 0) {
      throw new Error("No exercises available");
    }
    return response.rows.map((c) => new Exercise(c));
    }
    
}

export default Exercise;