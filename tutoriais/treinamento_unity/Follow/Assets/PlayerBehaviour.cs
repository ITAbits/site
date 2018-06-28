using UnityEngine;
using System.Collections;

public class PlayerBehaviour : MonoBehaviour {

    public float speed = 10f;

	// Use this for initialization
	void Start () {
        
	}
	
	// Update is called once per frame
	void Update () {

        // Calculating velocity
        Vector3 velocity = new Vector3();
        // S = S0 + v*delta_t
        if (Input.GetKey("w")) {
            velocity.y = speed;
        }
        if (Input.GetKey("s")) {
            velocity.y = -speed;
        }
        if (Input.GetKey("d")) {
            velocity.x = speed;
        }
        if (Input.GetKey("a")) {
            velocity.x = -speed;
        }

        // Updating position
        transform.position = transform.position + velocity * Time.deltaTime;

        //Optional: velocity = new Vector3(GetAxis("Horizontal"), GetAxis("Vertical"), 0f) * speed;

        //if (Input.GetKey("w")) {
        //    transform.position = transform.position + new Vector3(0f, speed, 0f) * Time.deltaTime;
        //}
        //if (Input.GetKey("s")) {
        //    transform.position = transform.position + new Vector3(0f, -speed, 0f) * Time.deltaTime;
        //}
        //if (Input.GetKey("d")) {
        //    transform.position = transform.position + new Vector3(speed, 0f, 0f) * Time.deltaTime;
        //}
        //if (Input.GetKey("a")) {
        //    transform.position = transform.position + new Vector3(-speed, 0f, 0f) * Time.deltaTime;
        //}
    }
}
