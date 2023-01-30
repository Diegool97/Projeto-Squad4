-- 1° Qual é a data do time mais antigo da NBA?
SELECT 
	nickname, yearfounded 
FROM 
	teams 
ORDER BY 
	yearfounded 
ASC


-- 2° Quais são os 10 times que tem a maior arena que cabe mais pessoas?
SELECT 
	nickname, arenacapacity
FROM 
	teams 
ORDER BY 
	ARENACAPACITY
DESC LIMIT 10

