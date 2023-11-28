import 'dart:io';

int Somatorio(int numero_entrada) {
  int total = 0;
  try {
    if (numero_entrada < 0) {
      throw new Exception("Numero deve ser positivo");
    }
    for (var numero = 1; numero < numero_entrada; numero++) {
      if (numero % 3 == 0 || numero % 5 == 0) {
        total += numero;
      }
    }
  } catch (e) {
    print(e);
  }
  return total;
}

void main(List<String> args) {
  print("Insira um numero positivo: ");
  String? entrada = stdin.readLineSync();
  int numero = int.parse(entrada!);
  print('resultado: ${Somatorio(numero)}');
}
