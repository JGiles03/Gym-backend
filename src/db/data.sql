DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS exercises;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
)

CREATE TABLE exercises (
    exercise_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    primary_muscle VARCHAR(100) NOT NULL,
    secondary_muscles VARCHAR ARRAY NOT NULL,
    description VARCHAR(255),
    graphic VARCHAR(255),
    PRIMARY KEY (exercise_id)
)

INSERT INTO exercises (name, primary_muscle, secondary_muscles, description, graphic)
VALUES
    ('Squats', 'Quads', ('Glutes', 'Hamstrings'), 'Barbell on back and squat down', 'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSquat_(exercise)&ved=0CBcQjRxqFwoTCMiI4_mWtJcDFQAAAAAdAAAAABA4&opi=89978449');
    
INSERT INTO exercises (name, primary_muscle, description, graphic)
VALUES
    ('Lateral Raises', 'Delts', 'Stand with a dumbell in each hand, raise the dumbells up and out to the side up to shoulder height', 'https://training.fit/wp-content/uploads/2020/03/seitenheben-kurzhanteln-800x448.png')