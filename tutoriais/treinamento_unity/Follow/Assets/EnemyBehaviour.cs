using UnityEngine;
using System.Collections;

public class EnemyBehaviour : MonoBehaviour {

    public float speed = 5f;
    //public initialDistance = 10f;
    public GameObject player;


	// Use this for initialization
	void Start () {
        
	}
	
	// Update is called once per frame
	void Update () {
        
        // Calculating velocity 
        Vector3 direction = player.transform.position - transform.position;
        direction = direction.normalized; // Who knows something?
        Vector3 velocity = direction * speed;

        // Updating position
        transform.position = transform.position + velocity * Time.deltaTime;
	}

    void OnTriggerEnter2D(Collider2D other) {
        if (other.gameObject.tag == "Player") {
            Destroy(other.gameObject);
        }
    }
}
