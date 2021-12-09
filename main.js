function canGiveBlood(donor, receiver) {
	// because "O-" can give to anyone
	// if (donor.includes("O-")) {
	// 	return true;
	// }
	get_antigen = (type) => {
		return type.substring(0, type.length - 1);
	}
	get_rh = (type) => {
		return type.substring(type.length - 1, type.length) === '+';
	}
	donor_antigen = get_antigen(donor);
	donor_rh = get_rh(donor);
	receiver_antigen = get_antigen(receiver);
	receiver_rh = get_rh(receiver);

	// + + 1
	// - + 1
	// - - 1
	// + - 0

	rh_possible = !donor_rh || receiver_rh;
	// O can do donate to anyone
	// A -> A && AB
	// B -> B && AB
	// AB -> AB
	antigen_possible = (donor_antigen.includes('O')) 
		|| receiver_antigen.includes(donor_antigen);
	
	return antigen_possible && rh_possible;
}
console.log(canGiveBlood("O+", "A+"));
console.log(canGiveBlood("A-", "B-"));
console.log(canGiveBlood("A-", "AB+"));
