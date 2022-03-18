using Microsoft.VisualStudio.TestTools.UnitTesting;
using CuentaBancariaNS;

namespace BancoTests
{
    [TestClass]
    public class CuentaBancariaTests
    {
        [TestMethod]
        public void Debito_ConCantidadCorrecta_ActualizaBalance(){
            var balanceInicial = 11.99;
            var cantidadDebito = 4.55;
            var balanceEsperado = 7.44;
            CuentaBancaria cuenta = new CuentaBancaria("Mr. Walter White", balanceInicial);

            cuenta.Debito(cantidadDebito);

            var balanceActual = cuenta.Balance;
            Assert.AreEqual(balanceEsperado, balanceActual, 0.001, "Cuenta no fue debitada correctamente");
        }

        [TestMethod]
        public void Credito_ConCantidadCorrecta_ActualizaBalance()
        {
            var balanceInicial = 12;
            var cantidadCredito = 7;
            var balanceEsperado = 19;
            CuentaBancaria cuenta = new CuentaBancaria("Mr. Walter White", balanceInicial);

            cuenta.Credito(cantidadCredito);

            Assert.AreEqual(balanceEsperado, cuenta.Balance, 0.001, "Cuenta no fue creditada correctamente");
        }

        [TestMethod]
        public void Debito_CantidadMenorCero_ArgumentOutOfRangeException()
        {
            double balanceInicial = 12;
            double cantidadDebito = -100.00;
            CuentaBancaria cuenta = new CuentaBancaria("Mr. Walter White", balanceInicial);

            Assert.ThrowsException<System.ArgumentOutOfRangeException>(() => cuenta.Debito(cantidadDebito));
        }
    }
}
