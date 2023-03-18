const coste_hotel = 140;
const coste_auto = 40;

export const calcularCosteHotel = (dias_hotel = 0, dias_auto = 0) => {
	const total = dias_hotel * coste_hotel + dias_auto * coste_auto;

	if (dias_auto >= 3) return total - 20;

	if (dias_auto >= 7) return total - 50;

	return total;
};
