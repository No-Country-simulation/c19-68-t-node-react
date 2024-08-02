export const dateFormater = (ini: any, end: any) => {
  const fechaInicio = new Date(ini);
  const fechaFin = new Date(end);

  const year = fechaInicio.getUTCFullYear();
  const month = fechaInicio.getUTCMonth();
  const day = fechaInicio.getUTCDate();

  console.log("Año: ", year, " Mes: ", month, " Day: ", day);

  console.log("FECHA DE INICIO FORMATEADA: ", new Date(year, month, day));
  console.log(
    "FECHA DE FIN FORMATEADA",
    new Date(
      fechaFin.getUTCFullYear(),
      fechaFin.getUTCMonth(),
      fechaFin.getUTCDate()
    )
  );

  return [
    new Date(year, month, day),
    new Date(
      fechaFin.getUTCFullYear(),
      fechaFin.getUTCMonth(),
      fechaFin.getUTCDate()
    ),
  ];
};
