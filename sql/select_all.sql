SELECT *

FROM users u

LEFT JOIN holdings h
  ON h.user_id = u.id

LEFT JOIN operations o
  ON o.holding_id = h.id

LEFT JOIN criptos c
  ON c.id = o.cripto_id

WHERE u.id = 1;

