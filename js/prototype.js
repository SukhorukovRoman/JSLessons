const soldier = {
    health: 400,
    armor: 100,
    ammo: 320,
    weight: function() {
        return this.armor+this.health;
    },
};

console.log(soldier);
console.log(soldier.weight());

/*  const soap=Object.create(soldier); */  /* создали новый объект который прототип soldier
но ему нельзя изменить и добавить свойства */
let soap = {
    health: 600,
    ammo: 500
};
Object.setPrototypeOf(soap,soldier); //указали прототип


console.log(soap);
console.log(soap.weight());
