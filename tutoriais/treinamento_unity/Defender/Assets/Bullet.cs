using UnityEngine;
using System.Collections;

public class Bullet : MonoBehaviour {

    public float Speed;

    // Update is called once per frame
	void Update ()
	{
	    transform.position += transform.right * Speed * Time.deltaTime;
	}
}
