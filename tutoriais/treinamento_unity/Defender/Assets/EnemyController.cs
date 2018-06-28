using UnityEngine;
using System.Collections;

public class EnemyController : MonoBehaviour
{
    public GameObject Player;
    public float Speed;

    void Start()
    {
        Player = GameObject.FindGameObjectWithTag("Player");
    }

	// Update is called once per frame
	void Update ()
	{
        #region Basic Movement
        Vector3 direction = (Player.transform.position - transform.position).normalized;
	    Vector3 velocity = direction*Speed;
	    transform.position += velocity*Time.deltaTime;
        #endregion
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Player")
        {
            Destroy(other.gameObject);
        }
        if (other.gameObject.tag == "Bullet")
        {
            Destroy(other.gameObject);
            Destroy(gameObject);
        }
    }
}
