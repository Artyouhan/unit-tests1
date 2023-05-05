export default function showHealth(units) {
    let result;
    if (units.health > 50) {
        result = healthly;
    }
    if (units.health <= 50 && units.health > 15) {
        result = wounded;
    }
    if (units.health < 15) {
        result = critical;
    }
    return result;
}