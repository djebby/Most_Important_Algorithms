-- @block
  CREATE TABLE IF NOT EXISTS Scores (id INT, score DECIMAL(3,2));

-- @block
  TRUNCATE TABLE Scores;

-- @block
  INSERT INTO Scores (id, score)
  VALUES ('1', '3.5'), ('2', '3.65'), ('3', '4.0'), ('4', '3.85'), ('5', '4.0'), ('6', '3.65');

-- @block solution
SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM Scores;
