import React from 'react'

const ProfilPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* avatar */}
            <div>
              {/* photo */}
              <div className="bg-white rounded-xl p-4 items-center">
                <img
                  className="w-40 h-40 rounded-xl"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADBAMEDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAAMBAgUEBgcI/8QARBAAAgEDAgMFBAcFBQcFAAAAAQIDAAQRBSESMUEGEyJRYXGBkaEUIzJCUnKxYoLB0fAHNEOS4RUkM0RjorJTc3Wz8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAqEQADAAICAgEBBwUAAAAAAAAAAQIDERIhBDFBIhMyQlFhgeEUcZGhsf/aAAwDAQACEQMRAD8A8iSc0b+dGKMVqKAoGaKmgAooooAKKKKACjepxUhWPIE4BOwycD2UAV39aPjTSiIPrWw2+I1GXyPxdBVQUO4Cqo5s7AAe8/wqp5ZXotWKn2Uopve2g2AMnqikD44JoBtHOOJoj+2Dw/HFCyr5G8T+BVFdDWsoAI4WB5FSCG/KeR+NIKlSQQQRzB2NTmlXorqXPsio3qaKkRI386N/Opo2oAjfzo386KigCd/OjfzqKnFABv50UYooAmiiigAooooAKKnFSBQBAq6IXIA54J9wBNAFO8EEaO58VwHVFHNY1wWc+3GBVd1xWycTyrQl+GJGeRgMEKq8+JuoyNtqWbgIqlSVO7Arnizg8O/P21nXE8hd+IZDEkEbgdMUpbjGQwYjoR/GszdV7NaUz6R2d4x8yTz32NWVJGxtj2Ln5tXKtwSRwRux+ArtiGqMOJLaHh8pGkB+IFGgbHwwOxB75h7cj9K0UDwAC5USQnmWAYqPxA9R5+Xl1GYuqNbv3d1A0bAdeGRHH5gAfka6TqtmAFUt3b7r1Az5UCXZ34to2YRsBxHJU4wduR8/66cpmhikVCcFT9nfdfQHn/Xpv5q6uiXQxt4QvCMbfZOR/Kuyz1FmjMch2IPuII3FVPf3kWLWtMfPA0L4O6sOJGxjK5xuPMcjSa7pZVltyCcskiuh/OCG+O3wrjIrdjvlO2Ysk8a0ilFTioqwrINFTUUAAqarUigRNFRmigZNFFFABUijFWApAAFWAqQKuBQBAFc+oyMjWzYPdmBEXyBVBG2PXz/137MbevT1rk1uSSJns84ji4VKAjBcKOJmx1NVZvSL8O9tmWSOR/0IqpMY3OPf/Kuiz07vYVdw2ZPEoyRhTyxitC20ASsPCcE83JOPjWOs0z7N0+PdLaMhLpx/wIgx82G2a7Vl7RSD6tkUY+yYowD72BNez07s7ZRhSycTebY+Qr0dvp1pGAFiQfuist+U/wAJqnxJ/EfIZLDXbkkPb8ZHIhhg+zFSnZ/tQ6+DTLhlzsRw4Psya+3x28S44UUe4V0rCvlVf9Vfwgfj417bPhT9n+1Uahn0e/KjJPBGJD8EJNcbLdW791NBPDLj7E8TxvvtnhcA1+g+5WsPtDoVtrNlJA4C3MYZrKb70U2Nt/wnYMP5VJeW96tdEH48tfS+z5dYcMhEcsvdsUVY+MfVFvJ36e3GPPHOul43R3R1KuhKsrbEEbEGuezQvHmVeCaOSSCdTzWSNuBs1o3A4lgk6lO7c/tRYX9MV0sNtVxZzs0fTyOEiq04iqEVrMguoqxFVxTADRRijFABmipwKKACpqKsBSAkCrqKgUxRQAAUxQKFFMApiG2sfeXNmn4riAe7jFYuskT6jOq4xLO4Xh5HifhGK9BY4W7syRkCdNhzOdsVix25uNZZRulvxysfUEqv9elZc74vZs8WeS0vzNmzt0AjXGwAAHpW5BEq4wKzEaGEs8siRxRgcTyMFRfaTRL2m7P2ynE8tww+7bRNg/vycIrjuap9I77qYXb0eotyBitGPkK+Y3Hba9J4bG2t7dfxz5uJfbjZB8DXtOzuqT6hpdldXBUzP3gkZFCqxSRkDBRtvio3hqFuiE5ot6k9JGRtXUlee1fVZNK0u9v4oklkhEXAknFweN1QswUg4GfOvO2n9o4wPpVhA3mbaZ4mx+WUMPnTxYqpbRTmuZemfRTSJdwa83b9veysw+tkurc9RLBxqP3oS36VtW9/p+oQi4sbiK4hJ4eOInwsPuspwwPoQKhlipXaFipN9HzDW4Raa5rsajhSa6S8QdP94hSQ49+aUriSHHVWBPvBFeh7b2IH0HU0UZybK4weYwZIm/8AIe8V5a0bi7wdMA/Ouh4tc+LMnkzx5IYQKoRT2FLYV1jkiCKqaaRVCKQylFFFMAooooAmrAVGKuKQFgKYoqqimqKYFlFNAqqimqKZEtG3dPFLyMUiSA+RRg1LZ4tJuNXvLq3uAl7ePFYlYwFnWHMjsjMQMDjUZx+m2lbmK3tvpBiEks0kiISAe7jjwDwhtskk/Csu+toryx7TXsvHJNbXegkO7Me7gkR4nRBnAHLp0rm5ssZLeN/B18Hj5MOJZ9/e9f7MW+mvNXlixE8Vsq8aK74j3z42bhySem365NYbBlO0NvPjl3iTOPkQPlWtdWsgileMjiI4Yh90HkPSs7WoYbOLT4rZQxkt++mlkPFLLKXZSGJ3AG2wxzqENUtIsyy4rddshogue9061bHMRpwuP3HANem0PWbBIxDJNBbxxqAgkZY1UDbABrhs7W2n0WS9QTRmC8FtGJnDd8hhRmIwAuVYkbAbYzuuTlWGnpqWsJZmR40kDyOY9m8EYOM/CoXEvqiUZKS3P9j3Ooa1oS2Uyy3lrPFIhV4omWZpAfu8C1410hkJ7jRrKFG+yLpWlmI6Eomw+NdM2jR6d2l03T2d3glEc8ZkOSTwORufUCurV7aOGy1SZF454Z7a2Ck5WFHUs8pXlknCgkbZ23OariZT1PyTvJTTdfHRjnTBMd/okHU9xbPw/vBJT+laek2/aHRb2O502OO+jnjaOSNJGWOUAFgsiMQQR9w8XPbrgx2Qj0u/klsb+2DBra9mnld1+pKGIQNbGMd6r7sD4jnbbavSaVo94kQBdu8jkkAJ2do+MiMyAbBiMZp57cTr3+hHBE5H6a/UztS7VaXrGj6hZzW8trelYpIEch0aWGZCQrYDAgcWxX0znn5/TsFZjkbsqAZGTgZP6itqawgl0/8AtFvu7iLJe3iwOUUkNaBSxjbmPEW5HrXqdL0+z0zSbSzTT4rzESvfyTLEHkkk8cn3ckjOBuMYG+RUcebHge0uv4FkwZM/0p9/yeIIpTCtLUbZLW9vLeMkxxTMsZPPuz4lz64IrhYV201S2jhtOXpnOwpZFOYUsimMURVauaoaACiiigC4FXXpVRV1FIBi01RS1pyimJl1FNUVRRTVpkTqdj9AQDnHJOP8/C4/j8Kbotp9L0jtdbyb9/Z6eeLGwbNyPlsaRERwyRscJKACTnCsD4W/n7a2ezXhftBaOMGSxRyuf/TkKnH+auL5MPHldfDPS+NmnN4ql+51/gx9JaK8s0inUd4uYbhTsVmj8J9fUVojSsLwrIrx8ws8SSfrt8qwGjmiupbizufo85OJQ8fewTcOw7yPIOfUGutdb1+FeE2ukyn8SzXUef3Sp/WqGtvcstb0tUjo1KD6FZyhWjSPhIYRxoihTucBRWN2OQz63NcEYWK3kx7ZGAx8qVqt5rOoqkV29vDCWH1Nmr4bfYu8ni2r0vZXT7W3gMkZJkkPjJOTtsBTquEP5bFEfaWutJC+3EMkEvZ/WIFy9oxV8dQj96AfnWvJY22rQ297BL9Xcwo6ZRJEdGHJlby5HfpWnqGmwXli8dwWCEhlIIDKy8mXPX+uteIgOvdn57qzsbqBrdJSVt7yJ5LfxgNxROh419RVSfJcX00Op4vlPaPWWmmtbjhV4kG2e4gSLPt4abdXtvo1tfXsgyttFxRpuWmuG8MUSjmSzYH/AOVgJr/ayXCRWuhKx24yb6QA/lOB8677PSbm4ubfUtcvTe3UDd5aW6RrDZWr4wJEiGcsOhJ2+YjUpd0w3VLSQW+kzxdnk0uTDXdzCWvMkeK4uZ1mnyfTJHurZsxOZb5WbihW7uRC3/TZuLHuO1V4+OUAHGcDOd+dces6nHZ27WNtgTvHwNw/4EZG+f2j0+PtqxKs98V8snlc+PG3+R5bUpVuL6+mXdHnfgPmi+EH4CuBhXQwpLCvVTPGVKPKVXKmznYUphXQw50lhUgEmlmmkUtqQyKKKKALjrTFpY60xaQDlpq0paatMTGrTVpS05aZEuK2uzjD/akcbY+vs7u1UnmMqJQB/lrGFdNpcNa3VpdLnNvNHKccyoPiHvGRVeSFUtMnFuK2jhuE4L+4iOxErL86XfRXNqIpAoEJBLPjJGPTy86f2i/3XW7orvHKUniboySKGBFdj3KT2cRB8UZB+W9cHTWtnqOSpbRgsjzrleGQEc0YH4VW3bXrV82hmz5cLH5rWnDptkX76GNDG7BpYCWTByCWjZNx12/St+wsOz31LyzataOxfjWCWeRU8hxRhx8qsSVLW1+5W3Uven+3ZwWkPa6/VfpdxNBD1S2TEzgftyDA+FbT6bFHAqPFFDGinL3Eo4z1LO7nJPmc10pD2b4Lbin7QXbMh7xe8vEAbAPjz3Y9mKRNpum3SR95p8drbgKZY3ma5uJ2Xi8Mkrk+DlkDc43PSqrhT22iU5Kp+n+/R5420/fRT6ddGW2L8JYg91IBzMLdQOWeXlnFbscsioA53wKvI8YJIUBFUKigAAKBgAAdBWXcXWTwrgVnvvo0Sx1/cOsMRR2WQzhlZGIYcCnqPbWMxJLFiSxOWJOSSeZJNdE7l+AfgX5nc1zmu94OJY8S67Z5zz8zy5n30hTUlqc1JatphEtSWp7UlqBiWpZpppZqJIriipooAkdaYtLHOmLQA5aatJWnLTExq01aUtMFMiOFXFLWrigCb63bU7SCNN76yUpbAnH0i359yD+NfueY25gZxLe7eMNGSRglSDkFSDggg9a3BSry0gv/ABOwiuvu3OCePbAFwBuR68x68qw5vH39UnQ8fyuKU0FgTKo4WwfSu8vqcJHCI3H7SAk+8V520uZ9PuXtblSkiYJBOQQeTIRsVPQivQxX8DY+sXHrXNuOzrxl6NC1uNTcjiSNR1wmPmTXZK78GWfO39cqzlvYNj3wxty5fKuHUtYhRCFfpjY7np0+VV8CTy76Oi5u1VMZFZiSGZyw+wpOT0J8qUttdyiKW7DRJIvHHDn6wpkgGQ9M+XP2cq6gFUBVACgYAGwFbfH8Tnq69GDyfM+z3E+wJ5k0s1YmqE8665xSjUpqYTSmoAU3WktTWpTUEhTdaW1MalmojK4oqaKAAGmLSquKAHr0pq0hTTlNMTHKaaDSFNNBpkRwNXBpQNXBoEMFdFtb3F1NHBAnFI5OMnCKFUsWdugABJpMUc08sUMKF5ZW4Y1HU8ySfIcya0NJvIrbWdTjVuOO0t/oVqwI4XaQK00+B1YgAeQGKruuKLccc3+hm9oooJDZ27BZBBZWiRyJ4XRu6Vi0bc8HPI5HpXmDHqUW0TLKvIcXgfHr0+dem1ezuYp3uUV5LRzlsZYwHyPXh8vKlwWgfhbGxwa4t3WN/UehjHGSVx+DHtoO0NyQqpFGp+9LIWx7FQE/OvSaZoEcDpcXUjXFyN1ZwFjjP/TjG2fU5NaNlBEmNhmuxnleVba0iM9y32Y02A/akfkqjqT86y5Mt31JpjDGP6qOPU7WfhS4RQ0MMUMcnCcshkeThLL5HBA/13xya+jro0a6Re2U0pa4vIW+kXKDhbvuHKNGDyCEDg9nma+dIHuLG31AKuHd7e6EYwsdzGxQkAclfGV946V2vEpzCx37PPeWleSskehZNLJqSaoTW4xEMaUx51djSiaAKNSmpjGlNSJC2pZNXNLNIYZoqKKAAVcGl1YUwHKaappCmmqaAHqaYDSFNaOn2E180rCSOC1t+A3d3NvHAHOAABuXPQZ9dhzG9Edb6QniVQCSBvjfz8q0V0zUFtnvJ4e4t1TjT6RIsEs/7MKSAn3lQKvJq2kaSSmkWwluVyrX96Fknz1MS/YUewD3152/1O+vJhLdTPKGOMuc8LE7Y9D/AFzqvm36LljS+8bD6xa28EsVtb9xxrwTt3vezzD8BlGAE8wAM1naXcO+omRsAyrg4wB4eQ+FZr79aLeV4Jo5V3aNg4B645j37j31HiWb/I+o2ZjHCSAfb1zXHfjs7HdtZ2dwqXvFwyWyxv8AR+/O5jSUDhD+Y5Z22OxnSrqOdLaaM8SEhxn9nxcLDz86+a6jNrtneXenXl8zvFMZWeIBC5lPecXHjjO586oy4pyLTLcWasT3J7uK5sYV7+9muY7YSyQhbaEtM7RnhfdyoAB2PXb0r3Ojto0tlDc6WY2tpskOoIcsDhhJxeLiHXNfEopdVuFeS41S9eJAZH7+4klHmciUkV7H+zu41C1kvbS7mZotTtotWtFZQgj2Ctwj9pSpO33feao8ecS6LMvkVmffo9/q12tnp+o3RP8Ad7S4l381jOPnivlmiX/0SBLeRQ8bpw3ET7pKH3bn1/r1Hqe2+qxRWaaWjcVzflWlUf4VpGwdi3q5AA9M18/DEHOd6uWNUuyhXxfR6W4sbOeTh0m47+Tg717Rj9dGpxjgdsA+zOfb0y5Fkjdo5FZJF+0kilXHtVt65Yr2eAghzscjcgqfMMK2oO0EVyiQapbR3UI2RpRiZB0Kup4h7jViq499/wDSDxxXc9GUTS2NblzpFtcRC40eZ5hh2e0lwZ1VBxExMPtY8sZ9tYJNXRkm1tFNRUPTKk0pjV2NKY0xFSaoak1WgAoqKKACiozUg0wLqaYppINXU0gH8WATjOBsBzJ8hWxrFyLK0tNBhYfUr3+oMp/4l7IOJ84/Dso/LWZYFBeWbyAd3DJ9JkzyK26mfH/bj31wtPJczzTynMksjSOT+Jjk1Cu3osjrsFYkDJ33B9oqGAYEHcEEGql1VmH7w99AYGmSKIxBMTnJG6MfvL5/z/1qTlWB8iDUyJ3ijBw6nKnyPr6edUVuMEMMOpwy+R/rlQB7/sfameAzrIO7R2ikjG+ZF5Ej8pU/1thdvtPjt7uzulfhmuWaMAAbxqMnOfI8vbWh2EvRHd3lix8NzCs8Yz/iQHhbHtUj/LXF/aLNxatpUGdobNpSPWWTH8Ki0hfJi6fYNdXGnWc9w30O7u7a3ugI4g5jkcLwq4AIzsCc9a+q3OnOl7pl9aiKM2iSROCCF7hoygUKPLoPSvl1rN3X0eTrFPayg+XdzI+flX1jWbxLHTr+5Y7RxSY9T0FGg2fMdWnNzquozFi5EndcbHJYjdt/gPdXHsNzVU4ju5y7FnkJ/G5LtVh4j6dP500tIZXBY5P2fLzq4qTgCqF1HWmB3WN7PaXdvLG7DuctsfxYFdetxwrdLdQALBfxi6VVGFSQnEijHruPzVjxOG428yMewbVoSy99psSk5a1ucL58EyHPzUVVrjapEm9w0zgY0smpY0smrzOQTUUUUwCiiigCKipqKALVINVqaAGiQpFeMD/yky/5ysf8TXFE2xrqCl47xRn+6u3uWSMmkQR7HNVv2Wz6Oa4cqQ45cj6UQy55068gVopMfaCkjHmKz4G2U+gpP2SNdDmlzLwnvlGSBiQDmy88j1HT/WojYYFOyDUhHRpF4bHUdPvA3ghnikcg7NC/gc+zhJNdXbuTj7SzjIIisrFB70Mn8axQBE/AR4DxMn5T9pf4ip1m6a81EzscubPTY5D+3FbJE36Z99RYB32LabfcRsR7hmvf9ttQJg07T1becrdT7/4aAEA+04r5qxPczDzjcf8Aaa3tYvWvb+eck8KpDbxeiRKF29pzT+RHKZADw53O5qDKvmPjUKBjcDepKp+FfhTGUaUeYrllmY4UHc10Osf4V+FcXCr3AUDwoASPMmosDugfAGD0rtjk+qulzsREfeHFc0UQAp4ThiuG6ARj4uKH8B8MSTVaKKtKQoqM0ZoAmiozRTAk8z7TRRRSAKKKKAOi2/57/wCPu/1jpEPI+2iioP2Wz6In+y35TWJb8h/XWiio0NGlFyrpH8v0ooqQCpucH/u/wNcVx/epPyQf/WtFFJgSfst+U/pXafufn/gaKKF7Eho6eyg0UUxin5fGuOD+8z+1f0FFFR+QNePl7qef7rc/mg/8qKKdfAfDOKoooqwpCiiimAUUUUhn/9k="
                  alt=""
                />
                <p className="text-sm text-gray-500 mt-4">John Doe</p>
                <p className="text-sm text-gray-500 mt-4">Johndoe.@gmail.com</p>
                <p className="text-sm text-gray-500 mt-4">+243 123456789</p>

                <div className="divider"></div>
                <div className="flex justify-center">
                  <button className=" btn  text-black-600 hover:bg-red-600 hover:text-white transition-colors duration-300">
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* formulaire */}
            {/* <div> */}
            <div className="flex-1 bg-white rounded-xl p-6">
              
              <p className="text-lg text font-semibold mt-4 mb-4">Edit your account</p>
              <p>Name</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input type="text" className="grow" placeholder="john doe " />
              </label>

              <p>Email</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input type="email" className="grow" placeholder="john doe" />
              </label>
              <p>Number</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input type="number" className="grow" placeholder="john doe" />
              </label>
              <p>Avatar</p>
              <label className="form-control w-full ">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                />
              </label>
              
              <p className="text-sm text-gray-500 mt-4">Password Information</p>
              <p>Current Password</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input
                  type="password"
                  className="grow"
                  placeholder="*******"
                />
              </label>

              <p>New Password</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input
                  type="password"
                  className="grow"
                  placeholder="********"
                />
              </label>
              <p>Confirm New Password</p>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <input
                  type="password"
                  className="grow"
                  placeholder="*******"
                />
              </label>
              <button className="btn btn-outline text-green-600 transition-colors duration-300 mt-6">
                Save now
              </button>
            </div>
          </div>
  )
}

export default ProfilPage
