CREATE TABLE cars(
    cars_id SERIAL PRIMARY KEY,
    model VARCHAR(255),
    carType VARCHAR(255),
    price INT,
    year INT,
    horsePower INT,
    seats INT,
    doors INT,
    transmission VARCHAR(255),
    quantity INT,
    imagesLink TEXT[]
);

INSERT INTO cars (model, carType, price, year, horsePower, seats, doors, transmission, quantity, imagesLink)
VALUES ('Toyota Highlander', 'SUV', 75, 2020, 295, 7, 4, 'Auto', 10, '{"https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/04/2020_Highlander_01_2FADC9D6C28B50D22F2FFF4339FCB81C59DC1810.jpg"}');