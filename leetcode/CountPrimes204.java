public class CountPrimes204 {
	public int countPrimes(int n) {
		
		boolean[] primes = new boolean[n];
		
		for(int i = 2; i < n; i++) {
			primes[i] = true;
		}

		for(int i = 2; i*i < n; i++) {
			if(primes[i]) {
				for(int j = i; i*j < n; j++) {
					primes[i*j] = false;
				}
			}
		}

		int counter = 0;
		for(int i = 2; i < n; i++) {
			if(primes[i]) {
				counter++;
			}
		}
		return counter;
	}
}
