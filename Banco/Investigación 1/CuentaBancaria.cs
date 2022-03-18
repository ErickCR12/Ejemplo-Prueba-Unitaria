using System;

namespace CuentaBancariaNS
{
    /// <summary>
    /// Clase de ejemplo para una cuenta bancaria.
    /// </summary>
    public class CuentaBancaria
    {
        private readonly string nombreCliente;
        private double balance;

        private CuentaBancaria() { }

        public CuentaBancaria(string nombreCliente, double balance)
        {
            this.nombreCliente = nombreCliente;
            this.balance = balance;
        }

        public string NombreCliente
        {
            get { return nombreCliente; }
        }

        public double Balance
        {
            get { return balance; }
        }

        public void Debito(double cantidad)
        {
            if (cantidad > balance)
            {
                throw new ArgumentOutOfRangeException("cantidad");
            }

            if (cantidad < 0)
            {
                throw new ArgumentOutOfRangeException("cantidad");
            }

            balance -= cantidad;
        }

        public void Credito(double cantidad)
        {
            if (cantidad < 0)
            {
                throw new ArgumentOutOfRangeException("cantidad");
            }

            balance += cantidad;
        }

        public static void Main()
        {
            CuentaBancaria ba = new CuentaBancaria("Mr. Walter White", 11.99);

            ba.Credito(5.77);
            ba.Debito(11.22);
            Console.WriteLine("El balance actual de la cuenta es: ${0}", ba.Balance);
        }
    }
}
