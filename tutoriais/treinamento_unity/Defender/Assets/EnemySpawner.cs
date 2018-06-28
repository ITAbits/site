using UnityEngine;
using System.Collections;
using System.Runtime.CompilerServices;

public class EnemySpawner : MonoBehaviour
{
    public GameObject Enemy;
    public float SpawnTime;
    public float FirstSpawnTime;

    // Update is called once per frame
    void Start () {
        // Calls the function after the first given time, and repeatedly at the second time rate
	    InvokeRepeating("SpawnEnemy", FirstSpawnTime, SpawnTime);
	}

    void SpawnEnemy()
    {
        Instantiate(Enemy, transform.position, transform.rotation);
    }
}
